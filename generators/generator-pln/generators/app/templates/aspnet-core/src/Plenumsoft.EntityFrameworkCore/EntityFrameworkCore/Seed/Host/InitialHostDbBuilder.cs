namespace <%= projectName %>.EntityFrameworkCore.Seed.Host
{
    public class InitialHostDbBuilder
    {
        private readonly <%= projectName %>DbContext _context;

        public InitialHostDbBuilder(<%= projectName %>DbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();

            new DefaultDataInitialization(_context).Create();

            _context.SaveChanges();
        }
    }
}

class FinancialReport < ApplicationRecord
    has_one :invoice
  
    # This class method is useful for finding all FinancialReports without an associated Invoice
    def self.without_invoice
      left_joins(:invoice).where(invoices: { id: nil })
    end
  end
  
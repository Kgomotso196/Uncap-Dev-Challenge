class Invoice < ApplicationRecord
  belongs_to :financial_report, optional: true
end
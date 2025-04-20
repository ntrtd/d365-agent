/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { Report347Api } from './Report347Api';
import { TaxRep347OperationKey } from './TaxRep347OperationKey';
import { NoYes } from './NoYes';
import { TaxRep347Presentation } from './TaxRep347Presentation';
import { TaxReportSituationCodeEs } from './TaxReportSituationCodeEs';

/**
 * This class represents the entity "Report347" of service "d365_metadata".
 */
export class Report347<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Report347Type<T>
{
  /**
   * Technical entity name for Report347.
   */
  static override _entityName = 'Report347';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Report347 entity.
   */
  static _keys = [
    'dataAreaId',
    'FiscalYear',
    'ReferenceOfEstate',
    'InvoiceYearForCash',
    'TaxExemptNumberTrans',
    'TaskCode',
    'CountryRegionTrans'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Year.
   */
  declare fiscalYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Of Estate.
   */
  declare referenceOfEstate: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Year For Cash.
   */
  declare invoiceYearForCash: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Exempt Number Trans.
   */
  declare taxExemptNumberTrans: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Code.
   * @nullable
   */
  declare taskCode?: TaxRep347OperationKey | null;
  /**
   * Country Region Trans.
   */
  declare countryRegionTrans: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount In Cash.
   */
  declare amountInCash: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Of Subventions.
   */
  declare amountOfSubventions: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Floor.
   * @nullable
   */
  declare floor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Settled.
   */
  declare amountSettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Payment.
   */
  declare numberOfPayment: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Country Region Tenants.
   * @nullable
   */
  declare countryRegionTenants?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported By.
   * @nullable
   */
  declare reportedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Abbreviation.
   */
  declare addressAbbreviation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tenancy.
   * @nullable
   */
  declare tenancy?: NoYes | null;
  /**
   * Amount Of Sales.
   */
  declare amountOfSales: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Number Declaration.
   * @nullable
   */
  declare taxExemptNumberDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deposit.
   * @nullable
   */
  declare deposit?: NoYes | null;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Subventions.
   */
  declare numberOfSubventions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Special Regime For Cash Accounting Method.
   * @nullable
   */
  declare specialRegimeForCashAccountingMethod?: NoYes | null;
  /**
   * Zip Postal Code.
   * @nullable
   */
  declare zipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Amount.
   */
  declare minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Purchase From Public Entity.
   */
  declare numberOfPurchaseFromPublicEntity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Process.
   * @nullable
   */
  declare insuranceProcess?: NoYes | null;
  /**
   * Replacement.
   * @nullable
   */
  declare replacement?: NoYes | null;
  /**
   * Document Num Of The Declaration.
   * @nullable
   */
  declare documentNumOfTheDeclaration?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Of Purchase.
   */
  declare amountOfPurchase: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Quarter 3.
   */
  declare amountQuarter3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Presentation Type.
   * @nullable
   */
  declare presentationType?: TaxRep347Presentation | null;
  /**
   * Minimum Amount Of Payments In Cash.
   */
  declare minimumAmountOfPaymentsInCash: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reverse Charge.
   * @nullable
   */
  declare reverseCharge?: NoYes | null;
  /**
   * Amount Tenants.
   */
  declare amountTenants: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Code For The Building Property.
   * @nullable
   */
  declare locationCodeForTheBuildingProperty?: TaxReportSituationCodeEs | null;
  /**
   * County Tenants.
   * @nullable
   */
  declare countyTenants?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported.
   * @nullable
   */
  declare reported?: NoYes | null;
  /**
   * Representative.
   * @nullable
   */
  declare representative?: NoYes | null;
  /**
   * Amount Quarter 2.
   */
  declare amountQuarter2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Purchase.
   */
  declare numberOfPurchase: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Quarter 4.
   */
  declare amountQuarter4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Quarter 1.
   */
  declare amountQuarter1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Presentaition Date.
   */
  declare presentaitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Tenants.
   * @nullable
   */
  declare nameTenants?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Declaration Number.
   * @nullable
   */
  declare previousDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Name.
   * @nullable
   */
  declare transName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Of Purchase From Public Entity.
   */
  declare amountOfPurchaseFromPublicEntity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created Date And Time.
   */
  declare createdDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Of Payment.
   */
  declare amountOfPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Sales.
   */
  declare numberOfSales: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Street No.
   */
  declare streetNo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Door.
   * @nullable
   */
  declare door?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Trans.
   * @nullable
   */
  declare countyTrans?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entrance.
   * @nullable
   */
  declare entrance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact.
   * @nullable
   */
  declare contact?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Report347Api<T>) {
    super(_entityApi);
  }
}

export interface Report347Type<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.Int32'>;
  referenceOfEstate: DeserializedType<T, 'Edm.String'>;
  invoiceYearForCash: DeserializedType<T, 'Edm.Int32'>;
  taxExemptNumberTrans: DeserializedType<T, 'Edm.String'>;
  taskCode?: TaxRep347OperationKey | null;
  countryRegionTrans: DeserializedType<T, 'Edm.String'>;
  amountInCash: DeserializedType<T, 'Edm.Decimal'>;
  amountOfSubventions: DeserializedType<T, 'Edm.Decimal'>;
  floor?: DeserializedType<T, 'Edm.String'> | null;
  amountSettled: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPayment: DeserializedType<T, 'Edm.Int32'>;
  countryRegionTenants?: DeserializedType<T, 'Edm.String'> | null;
  reportedBy?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  addressAbbreviation: DeserializedType<T, 'Edm.Int64'>;
  tenancy?: NoYes | null;
  amountOfSales: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptNumberDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  deposit?: NoYes | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  numberOfSubventions: DeserializedType<T, 'Edm.Int32'>;
  specialRegimeForCashAccountingMethod?: NoYes | null;
  zipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  minimumAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPurchaseFromPublicEntity: DeserializedType<T, 'Edm.Int32'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  insuranceProcess?: NoYes | null;
  replacement?: NoYes | null;
  documentNumOfTheDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  amountOfPurchase: DeserializedType<T, 'Edm.Decimal'>;
  amountQuarter3: DeserializedType<T, 'Edm.Decimal'>;
  presentationType?: TaxRep347Presentation | null;
  minimumAmountOfPaymentsInCash: DeserializedType<T, 'Edm.Decimal'>;
  reverseCharge?: NoYes | null;
  amountTenants: DeserializedType<T, 'Edm.Decimal'>;
  locationCodeForTheBuildingProperty?: TaxReportSituationCodeEs | null;
  countyTenants?: DeserializedType<T, 'Edm.String'> | null;
  reported?: NoYes | null;
  representative?: NoYes | null;
  amountQuarter2: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPurchase: DeserializedType<T, 'Edm.Int32'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  amountQuarter4: DeserializedType<T, 'Edm.Decimal'>;
  amountQuarter1: DeserializedType<T, 'Edm.Decimal'>;
  presentaitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameTenants?: DeserializedType<T, 'Edm.String'> | null;
  previousDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  transName?: DeserializedType<T, 'Edm.String'> | null;
  amountOfPurchaseFromPublicEntity: DeserializedType<T, 'Edm.Decimal'>;
  createdDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountOfPayment: DeserializedType<T, 'Edm.Decimal'>;
  numberOfSales: DeserializedType<T, 'Edm.Int32'>;
  streetNo: DeserializedType<T, 'Edm.Int32'>;
  door?: DeserializedType<T, 'Edm.String'> | null;
  countyTrans?: DeserializedType<T, 'Edm.String'> | null;
  entrance?: DeserializedType<T, 'Edm.String'> | null;
  contact?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { RAssetTablesApi } from './RAssetTablesApi';
import { NoYes } from './NoYes';
import { RAssetBelonged } from './RAssetBelonged';
import { RAssetVehicleEcoClass } from './RAssetVehicleEcoClass';
import { RAssetAssessedTaxType } from './RAssetAssessedTaxType';
import { RAssetVatRefundingStartDate } from './RAssetVatRefundingStartDate';
import { RAssetType } from './RAssetType';

/**
 * This class represents the entity "RAssetTables" of service "d365_metadata".
 */
export class RAssetTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetTablesType<T>
{
  /**
   * Technical entity name for RAssetTables.
   */
  static override _entityName = 'RAssetTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetTables entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Increasing Factor Group.
   * @nullable
   */
  declare increasingFactorGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logistics Postal Address Fk Valid From.
   */
  declare logisticsPostalAddressFkValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Resource.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Output Year.
   */
  declare outputYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Insurance Date 2.
   */
  declare insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replacement Cost.
   */
  declare replacementCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduction.
   * @nullable
   */
  declare deduction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer.
   * @nullable
   */
  declare manufacturer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model.
   * @nullable
   */
  declare model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guarantee Date.
   */
  declare guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vehicle Type.
   * @nullable
   */
  declare vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Removal From The Register Date.
   */
  declare removalFromTheRegisterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type Of Rate.
   * @nullable
   */
  declare typeOfRate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owned Share Denominator.
   */
  declare ownedShareDenominator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Main Asset.
   * @nullable
   */
  declare mainAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nontaxable.
   * @nullable
   */
  declare nontaxable?: NoYes | null;
  /**
   * Ground Area Category.
   * @nullable
   */
  declare groundAreaCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owned Share Numerator.
   */
  declare ownedShareNumerator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Deduction Amount.
   */
  declare taxDeductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport Tax Code.
   * @nullable
   */
  declare transportTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flag Of Ownership.
   * @nullable
   */
  declare flagOfOwnership?: RAssetBelonged | null;
  /**
   * Document Location.
   * @nullable
   */
  declare documentLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Emission Class.
   * @nullable
   */
  declare emissionClass?: RAssetVehicleEcoClass | null;
  /**
   * Date Of The Registration.
   */
  declare dateOfTheRegistration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Policy Number.
   * @nullable
   */
  declare insurancePolicyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room Cadastral Number.
   * @nullable
   */
  declare roomCadastralNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Cost.
   */
  declare acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vehicle Model.
   * @nullable
   */
  declare vehicleModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Date 1.
   */
  declare insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Kind.
   * @nullable
   */
  declare assetKind?: RAssetAssessedTaxType | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Base.
   */
  declare taxBase: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance Amount.
   */
  declare insuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fa Group.
   * @nullable
   */
  declare faGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Traceable Number.
   * @nullable
   */
  declare traceableNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Refunding.
   * @nullable
   */
  declare vatRefunding?: RAssetVatRefundingStartDate | null;
  /**
   * Start Date Of Building.
   */
  declare startDateOfBuilding: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Use.
   */
  declare assetUse: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessed Tax Code.
   * @nullable
   */
  declare assessedTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Land Cadastral Number.
   * @nullable
   */
  declare landCadastralNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Privilege.
   * @nullable
   */
  declare privilege?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type.
   * @nullable
   */
  declare assetType?: RAssetType | null;
  /**
   * Land Tax Code.
   * @nullable
   */
  declare landTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Registration Number.
   * @nullable
   */
  declare vehicleRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passport Number.
   * @nullable
   */
  declare passportNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  increasingFactorGroup?: DeserializedType<T, 'Edm.String'> | null;
  logisticsPostalAddressFkValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resource?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  outputYear: DeserializedType<T, 'Edm.Int32'>;
  insuranceDate2: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replacementCost: DeserializedType<T, 'Edm.Decimal'>;
  deduction?: DeserializedType<T, 'Edm.String'> | null;
  manufacturer?: DeserializedType<T, 'Edm.String'> | null;
  model?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  guaranteeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vehicleType?: DeserializedType<T, 'Edm.String'> | null;
  removalFromTheRegisterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  typeOfRate?: DeserializedType<T, 'Edm.String'> | null;
  ownedShareDenominator: DeserializedType<T, 'Edm.Int32'>;
  mainAsset?: DeserializedType<T, 'Edm.String'> | null;
  nontaxable?: NoYes | null;
  groundAreaCategory?: DeserializedType<T, 'Edm.String'> | null;
  ownedShareNumerator: DeserializedType<T, 'Edm.Int32'>;
  taxDeductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  transportTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  flagOfOwnership?: RAssetBelonged | null;
  documentLocation?: DeserializedType<T, 'Edm.String'> | null;
  emissionClass?: RAssetVehicleEcoClass | null;
  dateOfTheRegistration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  insurancePolicyNumber?: DeserializedType<T, 'Edm.String'> | null;
  roomCadastralNumber?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  vehicleModel?: DeserializedType<T, 'Edm.String'> | null;
  insuranceDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetKind?: RAssetAssessedTaxType | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxBase: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  insuranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  faGroup?: DeserializedType<T, 'Edm.String'> | null;
  traceableNumber?: DeserializedType<T, 'Edm.String'> | null;
  vatRefunding?: RAssetVatRefundingStartDate | null;
  startDateOfBuilding: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetUse: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  assessedTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  landCadastralNumber?: DeserializedType<T, 'Edm.String'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  privilege?: DeserializedType<T, 'Edm.String'> | null;
  assetType?: RAssetType | null;
  landTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  vehicleRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  passportNumber?: DeserializedType<T, 'Edm.String'> | null;
}

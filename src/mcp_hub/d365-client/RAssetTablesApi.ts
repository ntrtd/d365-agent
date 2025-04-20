/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetTables } from './RAssetTables';
import { RAssetTablesRequestBuilder } from './RAssetTablesRequestBuilder';
import { NoYes } from './NoYes';
import { RAssetBelonged } from './RAssetBelonged';
import { RAssetVehicleEcoClass } from './RAssetVehicleEcoClass';
import { RAssetAssessedTaxType } from './RAssetAssessedTaxType';
import { RAssetVatRefundingStartDate } from './RAssetVatRefundingStartDate';
import { RAssetType } from './RAssetType';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RAssetTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetTables<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RAssetTablesApi<DeSerializersT> {
    return new RAssetTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetTables;

  requestBuilder(): RAssetTablesRequestBuilder<DeSerializersT> {
    return new RAssetTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RAssetTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RAssetTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RAssetTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_INVENTORY_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCREASING_FACTOR_GROUP: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGISTICS_POSTAL_ADDRESS_FK_VALID_FROM: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOURCE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTPUT_YEAR: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INSURANCE_DATE_2: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLACEMENT_COST: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCTION: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTEE_DATE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEHICLE_TYPE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMOVAL_FROM_THE_REGISTER_DATE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TYPE_OF_RATE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNED_SHARE_DENOMINATOR: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAIN_ASSET: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NONTAXABLE: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUND_AREA_CATEGORY: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNED_SHARE_NUMERATOR: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_DEDUCTION_AMOUNT: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT_TAX_CODE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLAG_OF_OWNERSHIP: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      RAssetBelonged,
      true,
      true
    >;
    DOCUMENT_LOCATION: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMISSION_CLASS: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      RAssetVehicleEcoClass,
      true,
      true
    >;
    DATE_OF_THE_REGISTRATION: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_POLICY_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM_CADASTRAL_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_COST: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEHICLE_MODEL: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_DATE_1: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_KIND: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      RAssetAssessedTaxType,
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BASE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_AMOUNT: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FA_GROUP: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACEABLE_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REFUNDING: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      RAssetVatRefundingStartDate,
      true,
      true
    >;
    START_DATE_OF_BUILDING: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_USE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSED_TAX_CODE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAND_CADASTRAL_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIVILEGE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TYPE: EnumField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      RAssetType,
      true,
      true
    >;
    LAND_TAX_CODE: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_REGISTRATION_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSPORT_NUMBER: OrderableEdmTypeField<
      RAssetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RAssetTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faInventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FAInventoryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link increasingFactorGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASING_FACTOR_GROUP: fieldBuilder.buildEdmTypeField(
          'IncreasingFactorGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logisticsPostalAddressFkValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_ADDRESS_FK_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalAddress_FK_ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outputYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_YEAR: fieldBuilder.buildEdmTypeField(
          'OutputYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link insuranceDate2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_DATE_2: fieldBuilder.buildEdmTypeField(
          'InsuranceDate2',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replacementCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_COST: fieldBuilder.buildEdmTypeField(
          'ReplacementCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION: fieldBuilder.buildEdmTypeField(
          'Deduction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER: fieldBuilder.buildEdmTypeField(
          'Manufacturer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guaranteeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_DATE: fieldBuilder.buildEdmTypeField(
          'GuaranteeDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vehicleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_TYPE: fieldBuilder.buildEdmTypeField(
          'VehicleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link removalFromTheRegisterDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMOVAL_FROM_THE_REGISTER_DATE: fieldBuilder.buildEdmTypeField(
          'RemovalFromTheRegisterDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link typeOfRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_RATE: fieldBuilder.buildEdmTypeField(
          'TypeOfRate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownedShareDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNED_SHARE_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'OwnedShareDenominator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mainAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ASSET: fieldBuilder.buildEdmTypeField(
          'MainAsset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nontaxable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONTAXABLE: fieldBuilder.buildEnumField('Nontaxable', NoYes, true),
        /**
         * Static representation of the {@link groundAreaCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUND_AREA_CATEGORY: fieldBuilder.buildEdmTypeField(
          'GroundAreaCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownedShareNumerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNED_SHARE_NUMERATOR: fieldBuilder.buildEdmTypeField(
          'OwnedShareNumerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxDeductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEDUCTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxDeductionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transportTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TransportTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flagOfOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLAG_OF_OWNERSHIP: fieldBuilder.buildEnumField(
          'FlagOfOwnership',
          RAssetBelonged,
          true
        ),
        /**
         * Static representation of the {@link documentLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_LOCATION: fieldBuilder.buildEdmTypeField(
          'DocumentLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emissionClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMISSION_CLASS: fieldBuilder.buildEnumField(
          'EmissionClass',
          RAssetVehicleEcoClass,
          true
        ),
        /**
         * Static representation of the {@link dateOfTheRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_THE_REGISTRATION: fieldBuilder.buildEdmTypeField(
          'DateOfTheRegistration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link insurancePolicyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_POLICY_NUMBER: fieldBuilder.buildEdmTypeField(
          'InsurancePolicyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roomCadastralNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_CADASTRAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoomCadastralNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acquisitionCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_COST: fieldBuilder.buildEdmTypeField(
          'AcquisitionCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vehicleModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_MODEL: fieldBuilder.buildEdmTypeField(
          'VehicleModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_DATE_1: fieldBuilder.buildEdmTypeField(
          'InsuranceDate1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetKind} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_KIND: fieldBuilder.buildEnumField(
          'AssetKind',
          RAssetAssessedTaxType,
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE: fieldBuilder.buildEdmTypeField(
          'TaxBase',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link insuranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InsuranceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link faGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_GROUP: fieldBuilder.buildEdmTypeField('FAGroup', 'Edm.String', true),
        /**
         * Static representation of the {@link traceableNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACEABLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TraceableNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatRefunding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REFUNDING: fieldBuilder.buildEnumField(
          'VATRefunding',
          RAssetVatRefundingStartDate,
          true
        ),
        /**
         * Static representation of the {@link startDateOfBuilding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_OF_BUILDING: fieldBuilder.buildEdmTypeField(
          'StartDateOfBuilding',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_USE: fieldBuilder.buildEdmTypeField(
          'AssetUse',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link assessedTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSED_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'AssessedTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link landCadastralNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAND_CADASTRAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'LandCadastralNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link privilege} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVILEGE: fieldBuilder.buildEdmTypeField(
          'Privilege',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TYPE: fieldBuilder.buildEnumField('AssetType', RAssetType, true),
        /**
         * Static representation of the {@link landTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAND_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'LandTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'VehicleRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PassportNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetTables)
      };
    }

    return this._schema;
  }
}

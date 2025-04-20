/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseLeaseAdjustmentBookBiEntities } from './AssetLeaseLeaseAdjustmentBookBiEntities';
import { AssetLeaseLeaseAdjustmentBookBiEntitiesRequestBuilder } from './AssetLeaseLeaseAdjustmentBookBiEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AssetLeaseLeaseAdjustmentBookBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetLeaseLeaseAdjustmentBookBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentBookBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseLeaseAdjustmentBookBiEntities;

  requestBuilder(): AssetLeaseLeaseAdjustmentBookBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentBookBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetLeaseLeaseAdjustmentBookBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseLeaseAdjustmentBookBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ADJUSTMENT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEASE_BOOK_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PREVIOUS_LIABILITY_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_ASSET_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADJUSTMENT_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_ASSET_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADJUSTMENT_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_LIABILITY_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_ASSET_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_LIABILITY_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_LIABILITY_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_LIABILITY_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_ASSET_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_LIABILITY_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_ASSET_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADJUSTMENT_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREVIOUS_ASSET_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeaseLeaseAdjustmentBookBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link leaseAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'LeaseAdjustment',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link leaseBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'LeaseBookId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link previousLiabilityAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_LIABILITY_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousLiabilityAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newAssetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ASSET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewAssetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchangeRateReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link adjustmentAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustmentAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newAssetAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ASSET_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewAssetAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link adjustmentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustmentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newLiabilityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_LIABILITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewLiabilityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newAssetReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ASSET_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewAssetReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newLiabilityAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_LIABILITY_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewLiabilityAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newLiabilityReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_LIABILITY_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NewLiabilityReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousLiabilityReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_LIABILITY_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousLiabilityReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousAssetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_ASSET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousAssetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousLiabilityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_LIABILITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousLiabilityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousAssetReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_ASSET_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousAssetReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link adjustmentReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustmentReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link previousAssetAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_ASSET_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PreviousAssetAccountingAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeaseLeaseAdjustmentBookBiEntities)
      };
    }

    return this._schema;
  }
}

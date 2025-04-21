/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseBookTableBiEntities } from './AssetLeaseBookTableBiEntities';
import { AssetLeaseBookTableBiEntitiesRequestBuilder } from './AssetLeaseBookTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { AssetLeaseType } from './AssetLeaseType';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
import { AssetLeaseAccountingFrameworkType } from './AssetLeaseAccountingFrameworkType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class AssetLeaseBookTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetLeaseBookTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): AssetLeaseBookTableBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseBookTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseBookTableBiEntities;

  requestBuilder(): AssetLeaseBookTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseBookTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseBookTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseBookTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseBookTableBiEntities<DeSerializersT>,
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
    typeof AssetLeaseBookTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseBookTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_TYPE: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOW_VALUE: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_VENDOR: EnumField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHORT_TERM_MONTHS: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEASE_TYPE: EnumField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEASING_CONVENTION: EnumField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeasingConvention,
      true,
      true
    >;
    ACCOUNTING_FRAMEWORK: EnumField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseAccountingFrameworkType,
      true,
      true
    >;
    LEASE_TERM_OVER_ASSET_USEFUL_LIFE_BOOK_SET_UP: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_LAYER: EnumField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    PRESENT_VALUE_OVER_FAIR_VALUE_BOOK_SET_UP: OrderableEdmTypeField<
      AssetLeaseBookTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetLeaseBookTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link bookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TYPE: fieldBuilder.buildEdmTypeField(
          'BookType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lowValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE: fieldBuilder.buildEdmTypeField(
          'LowValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payToVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_VENDOR: fieldBuilder.buildEnumField('PayToVendor', NoYes, true),
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link shortTermMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_MONTHS: fieldBuilder.buildEdmTypeField(
          'ShortTermMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TYPE: fieldBuilder.buildEnumField(
          'LeaseType',
          AssetLeaseType,
          true
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
         * Static representation of the {@link leasingConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASING_CONVENTION: fieldBuilder.buildEnumField(
          'LeasingConvention',
          AssetLeaseLeasingConvention,
          true
        ),
        /**
         * Static representation of the {@link accountingFramework} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_FRAMEWORK: fieldBuilder.buildEnumField(
          'AccountingFramework',
          AssetLeaseAccountingFrameworkType,
          true
        ),
        /**
         * Static representation of the {@link leaseTermOverAssetUsefulLifeBookSetUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_TERM_OVER_ASSET_USEFUL_LIFE_BOOK_SET_UP:
          fieldBuilder.buildEdmTypeField(
            'LeaseTermOverAssetUsefulLifeBookSetUp',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link presentValueOverFairValueBookSetUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE_OVER_FAIR_VALUE_BOOK_SET_UP:
          fieldBuilder.buildEdmTypeField(
            'PresentValueOverFairValueBookSetUp',
            'Edm.Decimal',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeaseBookTableBiEntities)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseBooksSetup } from './LeaseBooksSetup';
import { LeaseBooksSetupRequestBuilder } from './LeaseBooksSetupRequestBuilder';
import { AssetLeaseAccountingFrameworkType } from './AssetLeaseAccountingFrameworkType';
import { NoYes } from './NoYes';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetLeaseType } from './AssetLeaseType';
import { AssetLeaseLeasingConvention } from './AssetLeaseLeasingConvention';
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
export class LeaseBooksSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseBooksSetup<DeSerializersT>, DeSerializersT>
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
  ): LeaseBooksSetupApi<DeSerializersT> {
    return new LeaseBooksSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseBooksSetup;

  requestBuilder(): LeaseBooksSetupRequestBuilder<DeSerializersT> {
    return new LeaseBooksSetupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseBooksSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaseBooksSetup<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaseBooksSetup<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaseBooksSetup, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseBooksSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK_TYPE: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNTING_FRAMEWORK: EnumField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      AssetLeaseAccountingFrameworkType,
      true,
      true
    >;
    PRESENT_VALUE_OVER_FAIR_VALUE_BOOK_SET_UP: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_TO_VENDOR: EnumField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHORT_TERM_MONTHS: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOW_VALUE_THRESHOLD: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    LEASE_TYPE: EnumField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      AssetLeaseType,
      true,
      true
    >;
    LEASING_CONVENTION: EnumField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeasingConvention,
      true,
      true
    >;
    LEASE_TERM_OVER_ASSET_USEFUL_LIFE_BOOK_SET_UP: OrderableEdmTypeField<
      LeaseBooksSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeaseBooksSetup<DeSerializers>>;
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
         * Static representation of the {@link accountingFramework} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_FRAMEWORK: fieldBuilder.buildEnumField(
          'AccountingFramework',
          AssetLeaseAccountingFrameworkType,
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
        /**
         * Static representation of the {@link payToVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_VENDOR: fieldBuilder.buildEnumField('PayToVendor', NoYes, true),
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
         * Static representation of the {@link lowValueThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'LowValueThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
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
         * Static representation of the {@link leasingConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASING_CONVENTION: fieldBuilder.buildEnumField(
          'LeasingConvention',
          AssetLeaseLeasingConvention,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseBooksSetup)
      };
    }

    return this._schema;
  }
}

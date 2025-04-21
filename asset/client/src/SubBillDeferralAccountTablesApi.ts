/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralAccountTables } from './SubBillDeferralAccountTables';
import { SubBillDeferralAccountTablesRequestBuilder } from './SubBillDeferralAccountTablesRequestBuilder';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { TableGroupAll } from './TableGroupAll';
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
export class SubBillDeferralAccountTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralAccountTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralAccountTablesApi<DeSerializersT> {
    return new SubBillDeferralAccountTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralAccountTables;

  requestBuilder(): SubBillDeferralAccountTablesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralAccountTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralAccountTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralAccountTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralAccountTables<DeSerializersT>,
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
    typeof SubBillDeferralAccountTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralAccountTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    ACCOUNT_CODE: EnumField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRAL_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STRAIGHT_LINE_TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_BASED_TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralAccountTables<DeSerializers>>;
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deferralAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DeferralAccountDisplayValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link straightLineTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'StraightLineTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RecognitionOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventBasedTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_BASED_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'EventBasedTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecognitionAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InitialRecognitionAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralAccountTables)
      };
    }

    return this._schema;
  }
}

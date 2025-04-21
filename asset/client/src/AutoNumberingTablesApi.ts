/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AutoNumberingTables } from './AutoNumberingTables';
import { AutoNumberingTablesRequestBuilder } from './AutoNumberingTablesRequestBuilder';
import { LtInvoiceAllGroupUser } from './LtInvoiceAllGroupUser';
import { DocNumberingModuleW } from './DocNumberingModuleW';
import { NoYes } from './NoYes';
import { LtInvoiceAutoNumberingType } from './LtInvoiceAutoNumberingType';
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
export class AutoNumberingTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AutoNumberingTables<DeSerializersT>, DeSerializersT>
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
  ): AutoNumberingTablesApi<DeSerializersT> {
    return new AutoNumberingTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AutoNumberingTables;

  requestBuilder(): AutoNumberingTablesRequestBuilder<DeSerializersT> {
    return new AutoNumberingTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AutoNumberingTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AutoNumberingTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AutoNumberingTables<DeSerializersT>,
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
    typeof AutoNumberingTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AutoNumberingTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBERING: OrderableEdmTypeField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      LtInvoiceAllGroupUser,
      true,
      true
    >;
    MODULE: EnumField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      DocNumberingModuleW,
      true,
      true
    >;
    CONTINUE: EnumField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL: EnumField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      LtInvoiceAutoNumberingType,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_DATE: OrderableEdmTypeField<
      AutoNumberingTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AutoNumberingTables<DeSerializers>>;
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
         * Static representation of the {@link numbering} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBERING: fieldBuilder.buildEdmTypeField(
          'Numbering',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          LtInvoiceAllGroupUser,
          true
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField(
          'Module',
          DocNumberingModuleW,
          true
        ),
        /**
         * Static representation of the {@link continue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUE: fieldBuilder.buildEnumField('Continue', NoYes, true),
        /**
         * Static representation of the {@link retail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL: fieldBuilder.buildEnumField('Retail', NoYes, true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LtInvoiceAutoNumberingType,
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE: fieldBuilder.buildEdmTypeField(
          'LastDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AutoNumberingTables)
      };
    }

    return this._schema;
  }
}

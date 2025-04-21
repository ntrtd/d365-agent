/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendPriceAdmTables } from './VendPriceAdmTables';
import { VendPriceAdmTablesRequestBuilder } from './VendPriceAdmTablesRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
import { GupDisabledEnabled } from './GupDisabledEnabled';
import { NoYes } from './NoYes';
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
export class VendPriceAdmTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendPriceAdmTables<DeSerializersT>, DeSerializersT>
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
  ): VendPriceAdmTablesApi<DeSerializersT> {
    return new VendPriceAdmTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendPriceAdmTables;

  requestBuilder(): VendPriceAdmTablesRequestBuilder<DeSerializersT> {
    return new VendPriceAdmTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendPriceAdmTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendPriceAdmTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendPriceAdmTables<DeSerializersT>,
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
    typeof VendPriceAdmTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendPriceAdmTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_CODE: EnumField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    STATUS: EnumField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      GupDisabledEnabled,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_CURRENT_PRICE: EnumField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      VendPriceAdmTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendPriceAdmTables<DeSerializers>>;
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', GupDisabledEnabled, true),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link exportCurrentPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_CURRENT_PRICE: fieldBuilder.buildEnumField(
          'ExportCurrentPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendPriceAdmTables)
      };
    }

    return this._schema;
  }
}

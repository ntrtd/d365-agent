/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnrealizedDocuSetTables } from './UnrealizedDocuSetTables';
import { UnrealizedDocuSetTablesRequestBuilder } from './UnrealizedDocuSetTablesRequestBuilder';
import { TaxUnrealizedDocuPrintLocation } from './TaxUnrealizedDocuPrintLocation';
import { TaxUnrealizedDocuProdType } from './TaxUnrealizedDocuProdType';
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
export class UnrealizedDocuSetTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnrealizedDocuSetTables<DeSerializersT>, DeSerializersT>
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
  ): UnrealizedDocuSetTablesApi<DeSerializersT> {
    return new UnrealizedDocuSetTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UnrealizedDocuSetTables;

  requestBuilder(): UnrealizedDocuSetTablesRequestBuilder<DeSerializersT> {
    return new UnrealizedDocuSetTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnrealizedDocuSetTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UnrealizedDocuSetTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UnrealizedDocuSetTables<DeSerializersT>,
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
    typeof UnrealizedDocuSetTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UnrealizedDocuSetTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: EnumField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      TaxUnrealizedDocuPrintLocation,
      true,
      true
    >;
    PRINT_HEADER: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_TYPE: EnumField<
      UnrealizedDocuSetTables<DeSerializers>,
      DeSerializersT,
      TaxUnrealizedDocuProdType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<UnrealizedDocuSetTables<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEnumField(
          'Location',
          TaxUnrealizedDocuPrintLocation,
          true
        ),
        /**
         * Static representation of the {@link printHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_HEADER: fieldBuilder.buildEdmTypeField(
          'PrintHeader',
          'Edm.String',
          true
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
         * Static representation of the {@link prodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_TYPE: fieldBuilder.buildEnumField(
          'ProdType',
          TaxUnrealizedDocuProdType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnrealizedDocuSetTables)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PropertyTypeTables } from './PropertyTypeTables';
import { PropertyTypeTablesRequestBuilder } from './PropertyTypeTablesRequestBuilder';
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
export class PropertyTypeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PropertyTypeTables<DeSerializersT>, DeSerializersT>
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
  ): PropertyTypeTablesApi<DeSerializersT> {
    return new PropertyTypeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PropertyTypeTables;

  requestBuilder(): PropertyTypeTablesRequestBuilder<DeSerializersT> {
    return new PropertyTypeTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PropertyTypeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PropertyTypeTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PropertyTypeTables<DeSerializersT>,
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
    typeof PropertyTypeTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PropertyTypeTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE: OrderableEdmTypeField<
      PropertyTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION_LABEL: OrderableEdmTypeField<
      PropertyTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM: EnumField<
      PropertyTypeTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION_LABEL: OrderableEdmTypeField<
      PropertyTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORTING: OrderableEdmTypeField<
      PropertyTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PropertyTypeTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
        /**
         * Static representation of the {@link groupDescriptionLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION_LABEL: fieldBuilder.buildEdmTypeField(
          'GroupDescriptionLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM: fieldBuilder.buildEnumField('Custom', NoYes, true),
        /**
         * Static representation of the {@link descriptionLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_LABEL: fieldBuilder.buildEdmTypeField(
          'DescriptionLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sorting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING: fieldBuilder.buildEdmTypeField('Sorting', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PropertyTypeTables)
      };
    }

    return this._schema;
  }
}

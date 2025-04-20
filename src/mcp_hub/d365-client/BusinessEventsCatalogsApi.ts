/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessEventsCatalogs } from './BusinessEventsCatalogs';
import { BusinessEventsCatalogsRequestBuilder } from './BusinessEventsCatalogsRequestBuilder';
import { ModuleAxapta } from './ModuleAxapta';
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
export class BusinessEventsCatalogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessEventsCatalogs<DeSerializersT>, DeSerializersT>
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
  ): BusinessEventsCatalogsApi<DeSerializersT> {
    return new BusinessEventsCatalogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessEventsCatalogs;

  requestBuilder(): BusinessEventsCatalogsRequestBuilder<DeSerializersT> {
    return new BusinessEventsCatalogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessEventsCatalogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessEventsCatalogs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessEventsCatalogs<DeSerializersT>,
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
    typeof BusinessEventsCatalogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessEventsCatalogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUSINESS_EVENT_ID: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESC_PARAM_2: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_PARAM_1: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_PARAM_2: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESC_PARAM_1: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODULE: EnumField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      ModuleAxapta,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT: OrderableEdmTypeField<
      BusinessEventsCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BusinessEventsCatalogs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link businessEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_EVENT_ID: fieldBuilder.buildEdmTypeField(
          'BusinessEventId',
          'Edm.String',
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
         * Static representation of the {@link descParam2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESC_PARAM_2: fieldBuilder.buildEdmTypeField(
          'DescParam2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameParam1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_PARAM_1: fieldBuilder.buildEdmTypeField(
          'NameParam1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameParam2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_PARAM_2: fieldBuilder.buildEdmTypeField(
          'NameParam2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descParam1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESC_PARAM_1: fieldBuilder.buildEdmTypeField(
          'DescParam1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', ModuleAxapta, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link contract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT: fieldBuilder.buildEdmTypeField(
          'Contract',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessEventsCatalogs)
      };
    }

    return this._schema;
  }
}

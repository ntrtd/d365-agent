/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlcoholProductionTypes } from './AlcoholProductionTypes';
import { AlcoholProductionTypesRequestBuilder } from './AlcoholProductionTypesRequestBuilder';
import { NoYesCombo } from './NoYesCombo';
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
export class AlcoholProductionTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AlcoholProductionTypes<DeSerializersT>, DeSerializersT>
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
  ): AlcoholProductionTypesApi<DeSerializersT> {
    return new AlcoholProductionTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AlcoholProductionTypes;

  requestBuilder(): AlcoholProductionTypesRequestBuilder<DeSerializersT> {
    return new AlcoholProductionTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AlcoholProductionTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AlcoholProductionTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AlcoholProductionTypes<DeSerializersT>,
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
    typeof AlcoholProductionTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AlcoholProductionTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE_ID: OrderableEdmTypeField<
      AlcoholProductionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_BEER: EnumField<
      AlcoholProductionTypes<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AlcoholProductionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_TYPE: OrderableEdmTypeField<
      AlcoholProductionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AlcoholProductionTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', false),
        /**
         * Static representation of the {@link isBeer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BEER: fieldBuilder.buildEnumField('IsBeer', NoYesCombo, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link parentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ParentType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AlcoholProductionTypes)
      };
    }

    return this._schema;
  }
}

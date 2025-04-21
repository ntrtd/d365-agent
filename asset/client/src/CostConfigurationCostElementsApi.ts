/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationCostElements } from './CostConfigurationCostElements';
import { CostConfigurationCostElementsRequestBuilder } from './CostConfigurationCostElementsRequestBuilder';
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
export class CostConfigurationCostElementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CostConfigurationCostElements<DeSerializersT>, DeSerializersT>
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
  ): CostConfigurationCostElementsApi<DeSerializersT> {
    return new CostConfigurationCostElementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostConfigurationCostElements;

  requestBuilder(): CostConfigurationCostElementsRequestBuilder<DeSerializersT> {
    return new CostConfigurationCostElementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationCostElements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationCostElements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationCostElements<DeSerializersT>,
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
    typeof CostConfigurationCostElements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationCostElements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_ELEMENT_LIST_NAME: OrderableEdmTypeField<
      CostConfigurationCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT: OrderableEdmTypeField<
      CostConfigurationCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CostConfigurationCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CostConfigurationCostElements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link costElementListName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LIST_NAME: fieldBuilder.buildEdmTypeField(
          'CostElementListName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT: fieldBuilder.buildEdmTypeField(
          'CostElement',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostConfigurationCostElements)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessorPaymentMethodMappings } from './ProcessorPaymentMethodMappings';
import { ProcessorPaymentMethodMappingsRequestBuilder } from './ProcessorPaymentMethodMappingsRequestBuilder';
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
export class ProcessorPaymentMethodMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcessorPaymentMethodMappings<DeSerializersT>, DeSerializersT>
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
  ): ProcessorPaymentMethodMappingsApi<DeSerializersT> {
    return new ProcessorPaymentMethodMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessorPaymentMethodMappings;

  requestBuilder(): ProcessorPaymentMethodMappingsRequestBuilder<DeSerializersT> {
    return new ProcessorPaymentMethodMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProcessorPaymentMethodMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessorPaymentMethodMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessorPaymentMethodMappings<DeSerializersT>,
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
    typeof ProcessorPaymentMethodMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessorPaymentMethodMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProcessorPaymentMethodMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      ProcessorPaymentMethodMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSOR_PAYMENT_METHOD: OrderableEdmTypeField<
      ProcessorPaymentMethodMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      ProcessorPaymentMethodMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProcessorPaymentMethodMappings<DeSerializers>>;
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
         * Static representation of the {@link connectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_NAME: fieldBuilder.buildEdmTypeField(
          'ConnectorName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link processorPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSOR_PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'ProcessorPaymentMethod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessorPaymentMethodMappings)
      };
    }

    return this._schema;
  }
}

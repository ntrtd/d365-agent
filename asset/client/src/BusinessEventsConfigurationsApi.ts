/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessEventsConfigurations } from './BusinessEventsConfigurations';
import { BusinessEventsConfigurationsRequestBuilder } from './BusinessEventsConfigurationsRequestBuilder';
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
export class BusinessEventsConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessEventsConfigurations<DeSerializersT>, DeSerializersT>
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
  ): BusinessEventsConfigurationsApi<DeSerializersT> {
    return new BusinessEventsConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessEventsConfigurations;

  requestBuilder(): BusinessEventsConfigurationsRequestBuilder<DeSerializersT> {
    return new BusinessEventsConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessEventsConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessEventsConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessEventsConfigurations<DeSerializersT>,
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
    typeof BusinessEventsConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessEventsConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUSINESS_EVENTS_TABLE: OrderableEdmTypeField<
      BusinessEventsConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      BusinessEventsConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_EVENTS_ENDPOINT_NAME: OrderableEdmTypeField<
      BusinessEventsConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISABLED: EnumField<
      BusinessEventsConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BusinessEventsConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link businessEventsTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_EVENTS_TABLE: fieldBuilder.buildEdmTypeField(
          'BusinessEventsTable',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessEventsEndpointName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_EVENTS_ENDPOINT_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessEventsEndpoint_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link disabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED: fieldBuilder.buildEnumField('Disabled', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessEventsConfigurations)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentProcessingPolicies } from './OutboundShipmentProcessingPolicies';
import { OutboundShipmentProcessingPoliciesRequestBuilder } from './OutboundShipmentProcessingPoliciesRequestBuilder';
import { WhsFillEntireShipment } from './WhsFillEntireShipment';
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
export class OutboundShipmentProcessingPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OutboundShipmentProcessingPolicies<DeSerializersT>,
      DeSerializersT
    >
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
  ): OutboundShipmentProcessingPoliciesApi<DeSerializersT> {
    return new OutboundShipmentProcessingPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OutboundShipmentProcessingPolicies;

  requestBuilder(): OutboundShipmentProcessingPoliciesRequestBuilder<DeSerializersT> {
    return new OutboundShipmentProcessingPoliciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentProcessingPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentProcessingPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentProcessingPolicies<DeSerializersT>,
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
    typeof OutboundShipmentProcessingPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentProcessingPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentProcessingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      OutboundShipmentProcessingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHOULD_FILL_ENTIRE_SHIPMENT: EnumField<
      OutboundShipmentProcessingPolicies<DeSerializers>,
      DeSerializersT,
      WhsFillEntireShipment,
      true,
      true
    >;
    SHOULD_ENFORCE_SHIPMENT_TO_ORDER_MATCHING: EnumField<
      OutboundShipmentProcessingPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      OutboundShipmentProcessingPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OutboundShipmentProcessingPolicies<DeSerializers>>;
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
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shouldFillEntireShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_FILL_ENTIRE_SHIPMENT: fieldBuilder.buildEnumField(
          'ShouldFillEntireShipment',
          WhsFillEntireShipment,
          true
        ),
        /**
         * Static representation of the {@link shouldEnforceShipmentToOrderMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_ENFORCE_SHIPMENT_TO_ORDER_MATCHING: fieldBuilder.buildEnumField(
          'ShouldEnforceShipmentToOrderMatching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PolicyDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentProcessingPolicies)
      };
    }

    return this._schema;
  }
}

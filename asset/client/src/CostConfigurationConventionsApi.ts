/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationConventions } from './CostConfigurationConventions';
import { CostConfigurationConventionsRequestBuilder } from './CostConfigurationConventionsRequestBuilder';
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
export class CostConfigurationConventionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CostConfigurationConventions<DeSerializersT>, DeSerializersT>
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
  ): CostConfigurationConventionsApi<DeSerializersT> {
    return new CostConfigurationConventionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostConfigurationConventions;

  requestBuilder(): CostConfigurationConventionsRequestBuilder<DeSerializersT> {
    return new CostConfigurationConventionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationConventions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationConventions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationConventions<DeSerializersT>,
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
    typeof CostConfigurationConventions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationConventions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONVENTION_NAME: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPUT_MEASUREMENT_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLOW_ASSUMPTION_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ELEMENT_DERIVATION_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationConventions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CostConfigurationConventions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link conventionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVENTION_NAME: fieldBuilder.buildEdmTypeField(
          'ConventionName',
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
         * Static representation of the {@link inputMeasurementPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_MEASUREMENT_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'InputMeasurementPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flowAssumptionPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOW_ASSUMPTION_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'FlowAssumptionPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'CostObjectPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costElementDerivationPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_DERIVATION_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'CostElementDerivationPolicyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostConfigurationConventions)
      };
    }

    return this._schema;
  }
}

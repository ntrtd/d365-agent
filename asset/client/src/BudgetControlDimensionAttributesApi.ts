/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlDimensionAttributes } from './BudgetControlDimensionAttributes';
import { BudgetControlDimensionAttributesRequestBuilder } from './BudgetControlDimensionAttributesRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetControlDimensionAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlDimensionAttributes<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlDimensionAttributesApi<DeSerializersT> {
    return new BudgetControlDimensionAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlDimensionAttributes<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetControlConfigurationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_CONFIGURATIONS: new OneToOneLink(
        'BudgetControlConfigurations',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlDimensionAttributes;

  requestBuilder(): BudgetControlDimensionAttributesRequestBuilder<DeSerializersT> {
    return new BudgetControlDimensionAttributesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlDimensionAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlDimensionAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlDimensionAttributes<DeSerializersT>,
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
    typeof BudgetControlDimensionAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlDimensionAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_ID: OrderableEdmTypeField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION: OrderableEdmTypeField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlDimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlDimensionAttributes<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlDimensionAttributes<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetControlConfigurationStatus,
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'Position',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlDimensionAttributes)
      };
    }

    return this._schema;
  }
}

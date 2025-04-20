/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationBasisRules } from './AllocationBasisRules';
import { AllocationBasisRulesRequestBuilder } from './AllocationBasisRulesRequestBuilder';
import { AllocationRuleDestinationsApi } from './AllocationRuleDestinationsApi';
import { AllocationBasisRuleSourcesApi } from './AllocationBasisRuleSourcesApi';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AllocationBasisRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AllocationBasisRules<DeSerializersT>, DeSerializersT>
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
  ): AllocationBasisRulesApi<DeSerializersT> {
    return new AllocationBasisRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToOneLink<
      AllocationBasisRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationBasisRuleSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE_SOURCE: OneToManyLink<
      AllocationBasisRules<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRuleSourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AllocationRuleDestinationsApi<DeSerializersT>,
      AllocationBasisRuleSourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ALLOCATION_RULE_DESTINATION: new OneToOneLink(
        'AllocationRuleDestination',
        this,
        linkedApis[0]
      ),
      ALLOCATION_BASIS_RULE_SOURCE: new OneToManyLink(
        'AllocationBasisRuleSource',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AllocationBasisRules;

  requestBuilder(): AllocationBasisRulesRequestBuilder<DeSerializersT> {
    return new AllocationBasisRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationBasisRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AllocationBasisRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AllocationBasisRules<DeSerializersT>,
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
    typeof AllocationBasisRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationBasisRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASIS_ID: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_INTERVAL: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      AllocationBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToOneLink<
      AllocationBasisRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationBasisRuleSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE_SOURCE: OneToManyLink<
      AllocationBasisRules<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRuleSourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationBasisRules<DeSerializers>>;
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
         * Static representation of the {@link basisId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_ID: fieldBuilder.buildEdmTypeField(
          'BasisId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link dateInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_INTERVAL: fieldBuilder.buildEdmTypeField(
          'DateInterval',
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationBasisRules)
      };
    }

    return this._schema;
  }
}

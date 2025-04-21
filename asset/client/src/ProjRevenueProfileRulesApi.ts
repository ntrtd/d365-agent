/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjRevenueProfileRules } from './ProjRevenueProfileRules';
import { ProjRevenueProfileRulesRequestBuilder } from './ProjRevenueProfileRulesRequestBuilder';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';
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
export class ProjRevenueProfileRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjRevenueProfileRules<DeSerializersT>, DeSerializersT>
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
  ): ProjRevenueProfileRulesApi<DeSerializersT> {
    return new ProjRevenueProfileRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjRevenueProfileRules;

  requestBuilder(): ProjRevenueProfileRulesRequestBuilder<DeSerializersT> {
    return new ProjRevenueProfileRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjRevenueProfileRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjRevenueProfileRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjRevenueProfileRules<DeSerializersT>,
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
    typeof ProjRevenueProfileRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjRevenueProfileRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_REVENUE_PROFILE_ID: OrderableEdmTypeField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_BILLING_METHOD: EnumField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      ProjContractBillingMethod,
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_GROUP_ID: OrderableEdmTypeField<
      ProjRevenueProfileRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjRevenueProfileRules<DeSerializers>>;
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
         * Static representation of the {@link projectRevenueProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_REVENUE_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProjectRevenueProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectContractBillingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_BILLING_METHOD: fieldBuilder.buildEnumField(
          'ProjectContractBillingMethod',
          ProjContractBillingMethod,
          true
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjectGroupId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjRevenueProfileRules)
      };
    }

    return this._schema;
  }
}

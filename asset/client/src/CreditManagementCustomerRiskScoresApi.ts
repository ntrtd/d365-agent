/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementCustomerRiskScores } from './CreditManagementCustomerRiskScores';
import { CreditManagementCustomerRiskScoresRequestBuilder } from './CreditManagementCustomerRiskScoresRequestBuilder';
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
export class CreditManagementCustomerRiskScoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CreditManagementCustomerRiskScores<DeSerializersT>,
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
  ): CreditManagementCustomerRiskScoresApi<DeSerializersT> {
    return new CreditManagementCustomerRiskScoresApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementCustomerRiskScores;

  requestBuilder(): CreditManagementCustomerRiskScoresRequestBuilder<DeSerializersT> {
    return new CreditManagementCustomerRiskScoresRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementCustomerRiskScores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementCustomerRiskScores<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementCustomerRiskScores<DeSerializersT>,
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
    typeof CreditManagementCustomerRiskScores,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementCustomerRiskScores,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementCustomerRiskScores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CreditManagementCustomerRiskScores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RISK_SCORE_GROUP_ID: OrderableEdmTypeField<
      CreditManagementCustomerRiskScores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      CreditManagementCustomerRiskScores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CreditManagementCustomerRiskScores<DeSerializers>>;
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
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link riskScoreGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_SCORE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RiskScoreGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditManagementCustomerRiskScores)
      };
    }

    return this._schema;
  }
}

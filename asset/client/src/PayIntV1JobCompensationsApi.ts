/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1JobCompensations } from './PayIntV1JobCompensations';
import { PayIntV1JobCompensationsRequestBuilder } from './PayIntV1JobCompensationsRequestBuilder';
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
export class PayIntV1JobCompensationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1JobCompensations<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1JobCompensationsApi<DeSerializersT> {
    return new PayIntV1JobCompensationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1JobCompensations;

  requestBuilder(): PayIntV1JobCompensationsRequestBuilder<DeSerializersT> {
    return new PayIntV1JobCompensationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1JobCompensations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1JobCompensations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1JobCompensations<DeSerializersT>,
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
    typeof PayIntV1JobCompensations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1JobCompensations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MARKET_MINIMUM_PAY: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SURVEY_COMPANY_ID: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_MAXIMUM_PAY: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKET_CONTROL_PAY: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_SURVEY_CODE: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_SOURCE: OrderableEdmTypeField<
      PayIntV1JobCompensations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1JobCompensations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link compensationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationLevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link marketMinimumPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_MINIMUM_PAY: fieldBuilder.buildEdmTypeField(
          'MarketMinimumPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link surveyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURVEY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'SurveyCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marketMaximumPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_MAXIMUM_PAY: fieldBuilder.buildEdmTypeField(
          'MarketMaximumPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link marketControlPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_CONTROL_PAY: fieldBuilder.buildEdmTypeField(
          'MarketControlPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalSurveyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SURVEY_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalSurveyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marketSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_SOURCE: fieldBuilder.buildEdmTypeField(
          'MarketSource',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1JobCompensations)
      };
    }

    return this._schema;
  }
}

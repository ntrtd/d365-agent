/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionArrears } from './DeductionArrears';
import { DeductionArrearsRequestBuilder } from './DeductionArrearsRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { BenefitsApi } from './BenefitsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DeductionArrearsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeductionArrears<DeSerializersT>, DeSerializersT>
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
  ): DeductionArrearsApi<DeSerializersT> {
    return new DeductionArrearsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      DeductionArrears<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      DeductionArrears<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayStatementHeadersApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[0]
      ),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DeductionArrears;

  requestBuilder(): DeductionArrearsRequestBuilder<DeSerializersT> {
    return new DeductionArrearsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeductionArrears<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeductionArrears<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DeductionArrears<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DeductionArrears, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeductionArrears,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeductionArrears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      DeductionArrears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      DeductionArrears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FULLY_RECOVERED: EnumField<
      DeductionArrears<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      DeductionArrears<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      DeductionArrears<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      DeductionArrears<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeductionArrears<DeSerializers>>;
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
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fullyRecovered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULLY_RECOVERED: fieldBuilder.buildEnumField(
          'FullyRecovered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeductionArrears)
      };
    }

    return this._schema;
  }
}

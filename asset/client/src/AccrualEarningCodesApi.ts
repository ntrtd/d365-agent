/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualEarningCodes } from './AccrualEarningCodes';
import { AccrualEarningCodesRequestBuilder } from './AccrualEarningCodesRequestBuilder';
import { AccrualPlansApi } from './AccrualPlansApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AccrualEarningCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccrualEarningCodes<DeSerializersT>, DeSerializersT>
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
  ): AccrualEarningCodesApi<DeSerializersT> {
    return new AccrualEarningCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualEarningCodes<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccrualPlansApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ACCRUAL_PLAN: new OneToOneLink('AccrualPlan', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AccrualEarningCodes;

  requestBuilder(): AccrualEarningCodesRequestBuilder<DeSerializersT> {
    return new AccrualEarningCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualEarningCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccrualEarningCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccrualEarningCodes<DeSerializersT>,
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
    typeof AccrualEarningCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccrualEarningCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCRUAL_ID: OrderableEdmTypeField<
      AccrualEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      AccrualEarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualEarningCodes<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccrualEarningCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualEarningCodes)
      };
    }

    return this._schema;
  }
}

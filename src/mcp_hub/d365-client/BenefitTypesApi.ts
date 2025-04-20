/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitTypes } from './BenefitTypes';
import { BenefitTypesRequestBuilder } from './BenefitTypesRequestBuilder';
import { BenefitPlansApi } from './BenefitPlansApi';
import { HcmBenefitConcurrentEnrollment } from './HcmBenefitConcurrentEnrollment';
import { PayrollCategory } from './PayrollCategory';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitTypes<DeSerializersT>, DeSerializersT>
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
  ): BenefitTypesApi<DeSerializersT> {
    return new BenefitTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLANS: OneToManyLink<
      BenefitTypes<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitPlansApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PLANS: new OneToManyLink('BenefitPlans', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitTypes;

  requestBuilder(): BenefitTypesRequestBuilder<DeSerializersT> {
    return new BenefitTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_TYPE_ID: OrderableEdmTypeField<
      BenefitTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCURRENT_ENROLLMENT: EnumField<
      BenefitTypes<DeSerializers>,
      DeSerializersT,
      HcmBenefitConcurrentEnrollment,
      true,
      true
    >;
    PAYROLL_CATEGORY: EnumField<
      BenefitTypes<DeSerializers>,
      DeSerializersT,
      PayrollCategory,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLANS: OneToManyLink<
      BenefitTypes<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'BenefitTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link concurrentEnrollment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENT_ENROLLMENT: fieldBuilder.buildEnumField(
          'ConcurrentEnrollment',
          HcmBenefitConcurrentEnrollment,
          true
        ),
        /**
         * Static representation of the {@link payrollCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_CATEGORY: fieldBuilder.buildEnumField(
          'PayrollCategory',
          PayrollCategory,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitTypes)
      };
    }

    return this._schema;
  }
}

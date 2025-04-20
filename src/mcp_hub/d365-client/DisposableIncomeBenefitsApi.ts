/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DisposableIncomeBenefits } from './DisposableIncomeBenefits';
import { DisposableIncomeBenefitsRequestBuilder } from './DisposableIncomeBenefitsRequestBuilder';
import { DisposableIncomesApi } from './DisposableIncomesApi';
import { BenefitsApi } from './BenefitsApi';
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
export class DisposableIncomeBenefitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DisposableIncomeBenefits<DeSerializersT>, DeSerializersT>
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
  ): DisposableIncomeBenefitsApi<DeSerializersT> {
    return new DisposableIncomeBenefitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      DisposableIncomeBenefits<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      DisposableIncomeBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DisposableIncomesApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISPOSABLE_INCOME: new OneToOneLink(
        'DisposableIncome',
        this,
        linkedApis[0]
      ),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DisposableIncomeBenefits;

  requestBuilder(): DisposableIncomeBenefitsRequestBuilder<DeSerializersT> {
    return new DisposableIncomeBenefitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DisposableIncomeBenefits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DisposableIncomeBenefits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DisposableIncomeBenefits<DeSerializersT>,
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
    typeof DisposableIncomeBenefits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DisposableIncomeBenefits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      DisposableIncomeBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DisposableIncomeBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      DisposableIncomeBenefits<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      DisposableIncomeBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DisposableIncomeBenefits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DisposableIncomeBenefits)
      };
    }

    return this._schema;
  }
}

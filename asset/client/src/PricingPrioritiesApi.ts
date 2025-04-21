/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PricingPriorities } from './PricingPriorities';
import { PricingPrioritiesRequestBuilder } from './PricingPrioritiesRequestBuilder';
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
export class PricingPrioritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PricingPriorities<DeSerializersT>, DeSerializersT>
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
  ): PricingPrioritiesApi<DeSerializersT> {
    return new PricingPrioritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PricingPriorities;

  requestBuilder(): PricingPrioritiesRequestBuilder<DeSerializersT> {
    return new PricingPrioritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PricingPriorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PricingPriorities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PricingPriorities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PricingPriorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PricingPriorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PricingPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PRIORITY_NUMBER: OrderableEdmTypeField<
      PricingPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRICING_PRIORITY_NAME: OrderableEdmTypeField<
      PricingPriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PricingPriorities<DeSerializers>>;
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
         * Static representation of the {@link pricingPriorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PricingPriorityNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pricingPriorityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PRIORITY_NAME: fieldBuilder.buildEdmTypeField(
          'PricingPriorityName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PricingPriorities)
      };
    }

    return this._schema;
  }
}

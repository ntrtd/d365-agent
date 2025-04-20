/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerRetentionTermSchedules } from './CustomerRetentionTermSchedules';
import { CustomerRetentionTermSchedulesRequestBuilder } from './CustomerRetentionTermSchedulesRequestBuilder';
import { CustomerRetentionTermsApi } from './CustomerRetentionTermsApi';
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
export class CustomerRetentionTermSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerRetentionTermSchedules<DeSerializersT>, DeSerializersT>
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
  ): CustomerRetentionTermSchedulesApi<DeSerializersT> {
    return new CustomerRetentionTermSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerRetentionTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_RETENTION_TERM: OneToOneLink<
      CustomerRetentionTermSchedules<DeSerializersT>,
      DeSerializersT,
      CustomerRetentionTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustomerRetentionTermsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_RETENTION_TERM: new OneToOneLink(
        'CustomerRetentionTerm',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CustomerRetentionTermSchedules;

  requestBuilder(): CustomerRetentionTermSchedulesRequestBuilder<DeSerializersT> {
    return new CustomerRetentionTermSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerRetentionTermSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerRetentionTermSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerRetentionTermSchedules<DeSerializersT>,
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
    typeof CustomerRetentionTermSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerRetentionTermSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETENTION_TERM: OrderableEdmTypeField<
      CustomerRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENT_COMPLETE: OrderableEdmTypeField<
      CustomerRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASE: EnumField<
      CustomerRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERCENT_TO_RETAIN: OrderableEdmTypeField<
      CustomerRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerRetentionTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_RETENTION_TERM: OneToOneLink<
      CustomerRetentionTermSchedules<DeSerializersT>,
      DeSerializersT,
      CustomerRetentionTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerRetentionTermSchedules<DeSerializers>>;
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
         * Static representation of the {@link retentionTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_TERM: fieldBuilder.buildEdmTypeField(
          'RetentionTerm',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percentComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'PercentComplete',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link release} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE: fieldBuilder.buildEnumField('Release', NoYes, true),
        /**
         * Static representation of the {@link percentToRetain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_TO_RETAIN: fieldBuilder.buildEdmTypeField(
          'PercentToRetain',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerRetentionTermSchedules)
      };
    }

    return this._schema;
  }
}

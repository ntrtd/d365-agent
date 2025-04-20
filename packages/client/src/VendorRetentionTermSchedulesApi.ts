/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorRetentionTermSchedules } from './VendorRetentionTermSchedules';
import { VendorRetentionTermSchedulesRequestBuilder } from './VendorRetentionTermSchedulesRequestBuilder';
import { VendorRetentionTermsApi } from './VendorRetentionTermsApi';
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
export class VendorRetentionTermSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorRetentionTermSchedules<DeSerializersT>, DeSerializersT>
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
  ): VendorRetentionTermSchedulesApi<DeSerializersT> {
    return new VendorRetentionTermSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorRetentionTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_RETENTION_TERM: OneToOneLink<
      VendorRetentionTermSchedules<DeSerializersT>,
      DeSerializersT,
      VendorRetentionTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorRetentionTermsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_RETENTION_TERM: new OneToOneLink(
        'VendorRetentionTerm',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorRetentionTermSchedules;

  requestBuilder(): VendorRetentionTermSchedulesRequestBuilder<DeSerializersT> {
    return new VendorRetentionTermSchedulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorRetentionTermSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorRetentionTermSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorRetentionTermSchedules<DeSerializersT>,
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
    typeof VendorRetentionTermSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorRetentionTermSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_ID: OrderableEdmTypeField<
      VendorRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENTAGE_OF_UNITS_DELIVERED: OrderableEdmTypeField<
      VendorRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE_TO_RETAIN: OrderableEdmTypeField<
      VendorRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE_TO_RELEASE: OrderableEdmTypeField<
      VendorRetentionTermSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRetentionTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_RETENTION_TERM: OneToOneLink<
      VendorRetentionTermSchedules<DeSerializersT>,
      DeSerializersT,
      VendorRetentionTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorRetentionTermSchedules<DeSerializers>>;
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
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('RuleID', 'Edm.String', false),
        /**
         * Static representation of the {@link percentageOfUnitsDelivered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_OF_UNITS_DELIVERED: fieldBuilder.buildEdmTypeField(
          'PercentageOfUnitsDelivered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentageToRetain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_TO_RETAIN: fieldBuilder.buildEdmTypeField(
          'PercentageToRetain',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentageToRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE_TO_RELEASE: fieldBuilder.buildEdmTypeField(
          'PercentageToRelease',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorRetentionTermSchedules)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarrantyTransactionStatuses } from './WarrantyTransactionStatuses';
import { WarrantyTransactionStatusesRequestBuilder } from './WarrantyTransactionStatusesRequestBuilder';
import { RetailWarrantyTransactionProcessingStatus } from './RetailWarrantyTransactionProcessingStatus';
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
export class WarrantyTransactionStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarrantyTransactionStatuses<DeSerializersT>, DeSerializersT>
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
  ): WarrantyTransactionStatusesApi<DeSerializersT> {
    return new WarrantyTransactionStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarrantyTransactionStatuses;

  requestBuilder(): WarrantyTransactionStatusesRequestBuilder<DeSerializersT> {
    return new WarrantyTransactionStatusesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarrantyTransactionStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarrantyTransactionStatuses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarrantyTransactionStatuses<DeSerializersT>,
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
    typeof WarrantyTransactionStatuses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarrantyTransactionStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_STORE: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_TERMINAL_ID: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_TRANSACTION_ID: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_TRANSACTION_DATE_TIME: OrderableEdmTypeField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSING_STATUS: EnumField<
      WarrantyTransactionStatuses<DeSerializers>,
      DeSerializersT,
      RetailWarrantyTransactionProcessingStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarrantyTransactionStatuses<DeSerializers>>;
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
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_STORE: fieldBuilder.buildEdmTypeField(
          'WarrantyStore',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyTerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyTransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastTransactionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_TRANSACTION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastTransactionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          RetailWarrantyTransactionProcessingStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarrantyTransactionStatuses)
      };
    }

    return this._schema;
  }
}

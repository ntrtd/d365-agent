/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentElectronicInvoiceFrameworkTableEntity } from './BusinessDocumentElectronicInvoiceFrameworkTableEntity';
import { BusinessDocumentElectronicInvoiceFrameworkTableEntityRequestBuilder } from './BusinessDocumentElectronicInvoiceFrameworkTableEntityRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BusinessDocumentElectronicInvoiceFrameworkTableEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializersT>,
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
  ): BusinessDocumentElectronicInvoiceFrameworkTableEntityApi<DeSerializersT> {
    return new BusinessDocumentElectronicInvoiceFrameworkTableEntityApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessDocumentElectronicInvoiceFrameworkTableEntity;

  requestBuilder(): BusinessDocumentElectronicInvoiceFrameworkTableEntityRequestBuilder<DeSerializersT> {
    return new BusinessDocumentElectronicInvoiceFrameworkTableEntityRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializersT>,
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
    typeof BusinessDocumentElectronicInvoiceFrameworkTableEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentElectronicInvoiceFrameworkTableEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_MANAGER_SERVICE_CODE_VALIDATION_ENABLED: EnumField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_MANAGER_SIRET_VALIDATION_ENABLED: EnumField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_SERVICE_CODE_VALIDATION_ENABLED: EnumField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_SIRET_VALIDATION_ENABLED: EnumField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<DeSerializers>
    >;
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
        /**
         * Static representation of the {@link projectManagerServiceCodeValidationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_SERVICE_CODE_VALIDATION_ENABLED:
          fieldBuilder.buildEnumField(
            'ProjectManagerServiceCodeValidationEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link projectManagerSiretValidationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MANAGER_SIRET_VALIDATION_ENABLED: fieldBuilder.buildEnumField(
          'ProjectManagerSiretValidationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountServiceCodeValidationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_SERVICE_CODE_VALIDATION_ENABLED:
          fieldBuilder.buildEnumField(
            'InvoiceAccountServiceCodeValidationEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link invoiceAccountSiretValidationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_SIRET_VALIDATION_ENABLED: fieldBuilder.buildEnumField(
          'InvoiceAccountSiretValidationEnabled',
          NoYes,
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
        ALL_FIELDS: new AllFields(
          '*',
          BusinessDocumentElectronicInvoiceFrameworkTableEntity
        )
      };
    }

    return this._schema;
  }
}

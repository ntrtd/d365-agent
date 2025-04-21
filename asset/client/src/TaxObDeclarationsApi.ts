/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxObDeclarations } from './TaxObDeclarations';
import { TaxObDeclarationsRequestBuilder } from './TaxObDeclarationsRequestBuilder';
import { TaxEvatStatus } from './TaxEvatStatus';
import { ContactPersonType } from './ContactPersonType';
import { TaxReportLayout } from './TaxReportLayout';
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
export class TaxObDeclarationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxObDeclarations<DeSerializersT>, DeSerializersT>
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
  ): TaxObDeclarationsApi<DeSerializersT> {
    return new TaxObDeclarationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxObDeclarations;

  requestBuilder(): TaxObDeclarationsRequestBuilder<DeSerializersT> {
    return new TaxObDeclarationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxObDeclarations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxObDeclarations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxObDeclarations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof TaxObDeclarations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxObDeclarations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_DESCRIPTION: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      TaxEvatStatus,
      true,
      true
    >;
    CONTACT_INITIALS: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_GROUP: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TYPE: EnumField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      ContactPersonType,
      true,
      true
    >;
    COLLECTION_TAX_REPORT_FIELD: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLLECTION_TAX_REPORT_LAYOUT: EnumField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      TaxReportLayout,
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_NAME: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_ID: OrderableEdmTypeField<
      TaxObDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxObDeclarations<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CollectionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', TaxEvatStatus, true),
        /**
         * Static representation of the {@link contactInitials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INITIALS: fieldBuilder.buildEdmTypeField(
          'ContactInitials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_GROUP: fieldBuilder.buildEdmTypeField(
          'FiscalGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TYPE: fieldBuilder.buildEnumField(
          'ContactType',
          ContactPersonType,
          true
        ),
        /**
         * Static representation of the {@link collectionTaxReportField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_TAX_REPORT_FIELD: fieldBuilder.buildEdmTypeField(
          'CollectionTaxReportField',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link collectionTaxReportLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_TAX_REPORT_LAYOUT: fieldBuilder.buildEnumField(
          'CollectionTaxReportLayout',
          TaxReportLayout,
          true
        ),
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_NAME: fieldBuilder.buildEdmTypeField(
          'CollectionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'ContactID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxObDeclarations)
      };
    }

    return this._schema;
  }
}

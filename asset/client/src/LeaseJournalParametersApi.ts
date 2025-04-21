/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseJournalParameters } from './LeaseJournalParameters';
import { LeaseJournalParametersRequestBuilder } from './LeaseJournalParametersRequestBuilder';
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
export class LeaseJournalParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseJournalParameters<DeSerializersT>, DeSerializersT>
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
  ): LeaseJournalParametersApi<DeSerializersT> {
    return new LeaseJournalParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseJournalParameters;

  requestBuilder(): LeaseJournalParametersRequestBuilder<DeSerializersT> {
    return new LeaseJournalParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseJournalParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseJournalParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseJournalParameters<DeSerializersT>,
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
    typeof LeaseJournalParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseJournalParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INITIAL_RECOGNITION_JOURNAL_NAME: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTHLY_JOURNAL_NAME: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_TYPE_MNTH_JOUR_NAME_CN: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_LEASE_TYPE: EnumField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_TYPE_INV_JOUR_NAME_CN: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_ENTITY_BATCH: EnumField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONFIRMED_LEASE_DELETION: EnumField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER_TYPE_INIT_RECO_NAME_CN: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_JOURNAL_NAME: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFICATION_JOURNAL_NAME: OrderableEdmTypeField<
      LeaseJournalParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseJournalParameters<DeSerializers>>;
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
         * Static representation of the {@link initialRecognitionJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECOGNITION_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'InitialRecognitionJournalName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link monthlyJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHLY_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'MonthlyJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherTypeMnthJourNameCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE_MNTH_JOUR_NAME_CN: fieldBuilder.buildEdmTypeField(
          'VoucherTypeMnthJourNameCN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideLeaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_LEASE_TYPE: fieldBuilder.buildEnumField(
          'OverrideLeaseType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link voucherTypeInvJourNameCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE_INV_JOUR_NAME_CN: fieldBuilder.buildEdmTypeField(
          'VoucherTypeInvJourNameCN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossEntityBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_ENTITY_BATCH: fieldBuilder.buildEnumField(
          'CrossEntityBatch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowConfirmedLeaseDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONFIRMED_LEASE_DELETION: fieldBuilder.buildEnumField(
          'AllowConfirmedLeaseDeletion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voucherTypeInitRecoNameCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE_INIT_RECO_NAME_CN: fieldBuilder.buildEdmTypeField(
          'VoucherTypeInitRecoNameCN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modificationJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFICATION_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'ModificationJournalName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseJournalParameters)
      };
    }

    return this._schema;
  }
}

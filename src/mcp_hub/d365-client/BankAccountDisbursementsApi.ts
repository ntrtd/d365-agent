/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankAccountDisbursements } from './BankAccountDisbursements';
import { BankAccountDisbursementsRequestBuilder } from './BankAccountDisbursementsRequestBuilder';
import { WorkerBankAccountsApi } from './WorkerBankAccountsApi';
import { WorkersApi } from './WorkersApi';
import { BaseWorkersApi } from './BaseWorkersApi';
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
export class BankAccountDisbursementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankAccountDisbursements<DeSerializersT>, DeSerializersT>
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
  ): BankAccountDisbursementsApi<DeSerializersT> {
    return new BankAccountDisbursementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerBankAccountsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_BANK_ACCOUNT: new OneToOneLink(
        'WorkerBankAccount',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BankAccountDisbursements;

  requestBuilder(): BankAccountDisbursementsRequestBuilder<DeSerializersT> {
    return new BankAccountDisbursementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankAccountDisbursements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankAccountDisbursements<DeSerializersT>,
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
    typeof BankAccountDisbursements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankAccountDisbursements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_IDENTIFICATION_ID: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REMAINDER: EnumField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_PRENOTE_STATUS: EnumField<
      BankAccountDisbursements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      BankAccountDisbursements<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankAccountDisbursements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountIdentificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_IDENTIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'AccountIdentificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link remainder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINDER: fieldBuilder.buildEnumField('Remainder', NoYes, true),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inPrenoteStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_PRENOTE_STATUS: fieldBuilder.buildEnumField(
          'InPrenoteStatus',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankAccountDisbursements)
      };
    }

    return this._schema;
  }
}

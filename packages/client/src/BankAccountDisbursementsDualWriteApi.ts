/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankAccountDisbursementsDualWrite } from './BankAccountDisbursementsDualWrite';
import { BankAccountDisbursementsDualWriteRequestBuilder } from './BankAccountDisbursementsDualWriteRequestBuilder';
import { WorkerBankAccountsApi } from './WorkerBankAccountsApi';
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
export class BankAccountDisbursementsDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankAccountDisbursementsDualWrite<DeSerializersT>, DeSerializersT>
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
  ): BankAccountDisbursementsDualWriteApi<DeSerializersT> {
    return new BankAccountDisbursementsDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToOneLink<
      BankAccountDisbursementsDualWrite<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerBankAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER_BANK_ACCOUNT: new OneToOneLink(
        'WorkerBankAccount',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BankAccountDisbursementsDualWrite;

  requestBuilder(): BankAccountDisbursementsDualWriteRequestBuilder<DeSerializersT> {
    return new BankAccountDisbursementsDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BankAccountDisbursementsDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankAccountDisbursementsDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankAccountDisbursementsDualWrite<DeSerializersT>,
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
    typeof BankAccountDisbursementsDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankAccountDisbursementsDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_IDENTIFICATION_ID: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REMAINDER: EnumField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BankAccountDisbursementsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToOneLink<
      BankAccountDisbursementsDualWrite<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankAccountDisbursementsDualWrite<DeSerializers>>;
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
         * Static representation of the {@link remainder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINDER: fieldBuilder.buildEnumField('Remainder', NoYes, true),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankAccountDisbursementsDualWrite)
      };
    }

    return this._schema;
  }
}

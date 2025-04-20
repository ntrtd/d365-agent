/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionBudgetReservations } from './TransactionPostingDefinitionBudgetReservations';
import { TransactionPostingDefinitionBudgetReservationsRequestBuilder } from './TransactionPostingDefinitionBudgetReservationsRequestBuilder';
import { BudgetReservationJournalizingTypePsn } from './BudgetReservationJournalizingTypePsn';
import { TableAll } from './TableAll';
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
export class TransactionPostingDefinitionBudgetReservationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionPostingDefinitionBudgetReservations<DeSerializersT>,
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
  ): TransactionPostingDefinitionBudgetReservationsApi<DeSerializersT> {
    return new TransactionPostingDefinitionBudgetReservationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionBudgetReservations;

  requestBuilder(): TransactionPostingDefinitionBudgetReservationsRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionBudgetReservationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionBudgetReservations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionBudgetReservations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionBudgetReservations<DeSerializersT>,
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
    typeof TransactionPostingDefinitionBudgetReservations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionBudgetReservations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_RESERVATION_TYPE_NAME: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_RESERVATION_JOURNALIZING_TYPE: EnumField<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>,
      DeSerializersT,
      BudgetReservationJournalizingTypePsn,
      true,
      true
    >;
    BUDGET_RESERVATION_TYPE_CODE: EnumField<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    POSTING_DEFINITION: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TransactionPostingDefinitionBudgetReservations<DeSerializers>
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
         * Static representation of the {@link budgetReservationTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetReservationTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetReservationJournalizingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_JOURNALIZING_TYPE: fieldBuilder.buildEnumField(
          'BudgetReservationJournalizingType',
          BudgetReservationJournalizingTypePsn,
          true
        ),
        /**
         * Static representation of the {@link budgetReservationTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_TYPE_CODE: fieldBuilder.buildEnumField(
          'BudgetReservationTypeCode',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link postingDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DEFINITION: fieldBuilder.buildEdmTypeField(
          'PostingDefinition',
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
          TransactionPostingDefinitionBudgetReservations
        )
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetReservationTypes } from './BudgetReservationTypes';
import { BudgetReservationTypesRequestBuilder } from './BudgetReservationTypesRequestBuilder';
import { NoYes } from './NoYes';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';
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
export class BudgetReservationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetReservationTypes<DeSerializersT>, DeSerializersT>
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
  ): BudgetReservationTypesApi<DeSerializersT> {
    return new BudgetReservationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetReservationTypes;

  requestBuilder(): BudgetReservationTypesRequestBuilder<DeSerializersT> {
    return new BudgetReservationTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetReservationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetReservationTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetReservationTypes<DeSerializersT>,
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
    typeof BudgetReservationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetReservationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESERVATION_TYPE: OrderableEdmTypeField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REDUCE_CARRY_FORWARD_BUDGET: EnumField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEVING_DOCUMENT: EnumField<
      BudgetReservationTypes<DeSerializers>,
      DeSerializersT,
      BudgetReservationRelievingDocumentPsn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetReservationTypes<DeSerializers>>;
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
         * Static representation of the {@link reservationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ReservationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reduceCarryForwardBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCE_CARRY_FORWARD_BUDGET: fieldBuilder.buildEnumField(
          'ReduceCarryForwardBudget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
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
        /**
         * Static representation of the {@link relievingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEVING_DOCUMENT: fieldBuilder.buildEnumField(
          'RelievingDocument',
          BudgetReservationRelievingDocumentPsn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetReservationTypes)
      };
    }

    return this._schema;
  }
}

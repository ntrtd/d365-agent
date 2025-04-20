/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillMassTerminationScheduleHeaderAndLines } from './SubBillMassTerminationScheduleHeaderAndLines';
import { SubBillMassTerminationScheduleHeaderAndLinesRequestBuilder } from './SubBillMassTerminationScheduleHeaderAndLinesRequestBuilder';
import { SubBillMassTerminationTablesApi } from './SubBillMassTerminationTablesApi';
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
export class SubBillMassTerminationScheduleHeaderAndLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
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
  ): SubBillMassTerminationScheduleHeaderAndLinesApi<DeSerializersT> {
    return new SubBillMassTerminationScheduleHeaderAndLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillMassTerminationTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: OneToOneLink<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillMassTerminationTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: new OneToOneLink(
        'SubBillMassTerminationTableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillMassTerminationScheduleHeaderAndLines;

  requestBuilder(): SubBillMassTerminationScheduleHeaderAndLinesRequestBuilder<DeSerializersT> {
    return new SubBillMassTerminationScheduleHeaderAndLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
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
    typeof SubBillMassTerminationScheduleHeaderAndLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillMassTerminationScheduleHeaderAndLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINATION_PROCESS_ID: OrderableEdmTypeField<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillMassTerminationTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: OneToOneLink<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SubBillMassTerminationScheduleHeaderAndLines<DeSerializers>
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
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminationProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'TerminationProcessId',
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
          SubBillMassTerminationScheduleHeaderAndLines
        )
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormW2BoxReportingAdjustments } from './FormW2BoxReportingAdjustments';
import { FormW2BoxReportingAdjustmentsRequestBuilder } from './FormW2BoxReportingAdjustmentsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { PayrollW2BoxNumber } from './PayrollW2BoxNumber';
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
export class FormW2BoxReportingAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FormW2BoxReportingAdjustments<DeSerializersT>, DeSerializersT>
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
  ): FormW2BoxReportingAdjustmentsApi<DeSerializersT> {
    return new FormW2BoxReportingAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      FormW2BoxReportingAdjustments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FormW2BoxReportingAdjustments;

  requestBuilder(): FormW2BoxReportingAdjustmentsRequestBuilder<DeSerializersT> {
    return new FormW2BoxReportingAdjustmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FormW2BoxReportingAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FormW2BoxReportingAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FormW2BoxReportingAdjustments<DeSerializersT>,
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
    typeof FormW2BoxReportingAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FormW2BoxReportingAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    W_2_BOX_NUMBER: EnumField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      PayrollW2BoxNumber,
      true,
      true
    >;
    REPORTING_DATE: OrderableEdmTypeField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    W_2_BOX_LABEL: OrderableEdmTypeField<
      FormW2BoxReportingAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      FormW2BoxReportingAdjustments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FormW2BoxReportingAdjustments<DeSerializers>>;
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
         * Static representation of the {@link w2BoxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_NUMBER: fieldBuilder.buildEnumField(
          'W2BoxNumber',
          PayrollW2BoxNumber,
          true
        ),
        /**
         * Static representation of the {@link reportingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_DATE: fieldBuilder.buildEdmTypeField(
          'ReportingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link w2BoxLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_LABEL: fieldBuilder.buildEdmTypeField(
          'W2BoxLabel',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FormW2BoxReportingAdjustments)
      };
    }

    return this._schema;
  }
}

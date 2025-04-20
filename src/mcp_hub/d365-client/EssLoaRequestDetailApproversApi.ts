/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLoaRequestDetailApprovers } from './EssLoaRequestDetailApprovers';
import { EssLoaRequestDetailApproversRequestBuilder } from './EssLoaRequestDetailApproversRequestBuilder';
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
export class EssLoaRequestDetailApproversApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EssLoaRequestDetailApprovers<DeSerializersT>, DeSerializersT>
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
  ): EssLoaRequestDetailApproversApi<DeSerializersT> {
    return new EssLoaRequestDetailApproversApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EssLoaRequestDetailApprovers;

  requestBuilder(): EssLoaRequestDetailApproversRequestBuilder<DeSerializersT> {
    return new EssLoaRequestDetailApproversRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLoaRequestDetailApprovers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssLoaRequestDetailApprovers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssLoaRequestDetailApprovers<DeSerializersT>,
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
    typeof EssLoaRequestDetailApprovers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLoaRequestDetailApprovers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUEST_ID: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_HALF_OF_END_DATE: EnumField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_HALF_OF_START_DATE: EnumField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      EssLoaRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EssLoaRequestDetailApprovers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstHalfOfEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_HALF_OF_END_DATE: fieldBuilder.buildEnumField(
          'FirstHalfOfEndDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workflowPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkflowPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondHalfOfStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_HALF_OF_START_DATE: fieldBuilder.buildEnumField(
          'SecondHalfOfStartDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLoaRequestDetailApprovers)
      };
    }

    return this._schema;
  }
}

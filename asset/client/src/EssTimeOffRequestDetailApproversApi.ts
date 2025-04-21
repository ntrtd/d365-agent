/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssTimeOffRequestDetailApprovers } from './EssTimeOffRequestDetailApprovers';
import { EssTimeOffRequestDetailApproversRequestBuilder } from './EssTimeOffRequestDetailApproversRequestBuilder';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
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
export class EssTimeOffRequestDetailApproversApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EssTimeOffRequestDetailApprovers<DeSerializersT>, DeSerializersT>
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
  ): EssTimeOffRequestDetailApproversApi<DeSerializersT> {
    return new EssTimeOffRequestDetailApproversApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EssTimeOffRequestDetailApprovers;

  requestBuilder(): EssTimeOffRequestDetailApproversRequestBuilder<DeSerializersT> {
    return new EssTimeOffRequestDetailApproversRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EssTimeOffRequestDetailApprovers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssTimeOffRequestDetailApprovers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssTimeOffRequestDetailApprovers<DeSerializersT>,
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
    typeof EssTimeOffRequestDetailApprovers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssTimeOffRequestDetailApprovers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEAVE_DATE: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HALF_DAY_DEFINITION: EnumField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      LeaveHalfDayDefinition,
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      EssTimeOffRequestDetailApprovers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EssTimeOffRequestDetailApprovers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link leaveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_DATE: fieldBuilder.buildEdmTypeField(
          'LeaveDate',
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
          false
        ),
        /**
         * Static representation of the {@link halfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'HalfDayDefinition',
          LeaveHalfDayDefinition,
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
         * Static representation of the {@link workflowPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkflowPersonnelNumber',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', EssTimeOffRequestDetailApprovers)
      };
    }

    return this._schema;
  }
}

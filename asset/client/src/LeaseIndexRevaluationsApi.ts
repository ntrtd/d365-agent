/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseIndexRevaluations } from './LeaseIndexRevaluations';
import { LeaseIndexRevaluationsRequestBuilder } from './LeaseIndexRevaluationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LeaseIndexRevaluationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseIndexRevaluations<DeSerializersT>, DeSerializersT>
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
  ): LeaseIndexRevaluationsApi<DeSerializersT> {
    return new LeaseIndexRevaluationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseIndexRevaluations;

  requestBuilder(): LeaseIndexRevaluationsRequestBuilder<DeSerializersT> {
    return new LeaseIndexRevaluationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseIndexRevaluations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseIndexRevaluations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseIndexRevaluations<DeSerializersT>,
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
    typeof LeaseIndexRevaluations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseIndexRevaluations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_ID: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIABILITY_ADJUSTED: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_ADJUSTED: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVALUE_PROCESS_ID: OrderableEdmTypeField<
      LeaseIndexRevaluations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseIndexRevaluations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link variablePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'VariablePayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link liabilityAdjusted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITY_ADJUSTED: fieldBuilder.buildEdmTypeField(
          'LiabilityAdjusted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseAdjusted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ADJUSTED: fieldBuilder.buildEdmTypeField(
          'LeaseAdjusted',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link revalueProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUE_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'RevalueProcessId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseIndexRevaluations)
      };
    }

    return this._schema;
  }
}

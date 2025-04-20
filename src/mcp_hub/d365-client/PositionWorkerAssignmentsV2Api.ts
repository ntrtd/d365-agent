/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionWorkerAssignmentsV2 } from './PositionWorkerAssignmentsV2';
import { PositionWorkerAssignmentsV2RequestBuilder } from './PositionWorkerAssignmentsV2RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { PositionsV2Api } from './PositionsV2Api';
import { BaseWorkersApi } from './BaseWorkersApi';
import { PayIntV1PayrollPositionsApi } from './PayIntV1PayrollPositionsApi';
import { PayrollPositionsApi } from './PayrollPositionsApi';
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
export class PositionWorkerAssignmentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PositionWorkerAssignmentsV2<DeSerializersT>, DeSerializersT>
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
  ): PositionWorkerAssignmentsV2Api<DeSerializersT> {
    return new PositionWorkerAssignmentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      PayIntV1PayrollPositionsApi<DeSerializersT>,
      PayrollPositionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      POSITION: new OneToOneLink('Position', this, linkedApis[1]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2]),
      PAY_INT_V_1_PAYROLL_POSITION: new OneToOneLink(
        'PayIntV1PayrollPosition',
        this,
        linkedApis[3]
      ),
      PAYROLL_POSITION: new OneToOneLink('PayrollPosition', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PositionWorkerAssignmentsV2;

  requestBuilder(): PositionWorkerAssignmentsV2RequestBuilder<DeSerializersT> {
    return new PositionWorkerAssignmentsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionWorkerAssignmentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionWorkerAssignmentsV2<DeSerializersT>,
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
    typeof PositionWorkerAssignmentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionWorkerAssignmentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PRIMARY_POSITION: EnumField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PositionWorkerAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionWorkerAssignmentsV2<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionWorkerAssignmentsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPrimaryPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_POSITION: fieldBuilder.buildEnumField(
          'IsPrimaryPosition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionWorkerAssignmentsV2)
      };
    }

    return this._schema;
  }
}

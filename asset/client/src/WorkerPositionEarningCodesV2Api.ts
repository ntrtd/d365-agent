/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerPositionEarningCodesV2 } from './WorkerPositionEarningCodesV2';
import { WorkerPositionEarningCodesV2RequestBuilder } from './WorkerPositionEarningCodesV2RequestBuilder';
import { PayrollCalculationFrequenciesApi } from './PayrollCalculationFrequenciesApi';
import { WorkersApi } from './WorkersApi';
import { PositionsV2Api } from './PositionsV2Api';
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
export class WorkerPositionEarningCodesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkerPositionEarningCodesV2<DeSerializersT>, DeSerializersT>
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
  ): WorkerPositionEarningCodesV2Api<DeSerializersT> {
    return new WorkerPositionEarningCodesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payrollCalculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollCalculationFrequenciesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_CALCULATION_FREQUENCY: new OneToOneLink(
        'PayrollCalculationFrequency',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = WorkerPositionEarningCodesV2;

  requestBuilder(): WorkerPositionEarningCodesV2RequestBuilder<DeSerializersT> {
    return new WorkerPositionEarningCodesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerPositionEarningCodesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerPositionEarningCodesV2<DeSerializersT>,
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
    typeof WorkerPositionEarningCodesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerPositionEarningCodesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FREQUENCY_ID: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      WorkerPositionEarningCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollCalculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      WorkerPositionEarningCodesV2<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerPositionEarningCodesV2<DeSerializers>>;
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
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link frequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'FrequencyId',
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
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerPositionEarningCodesV2)
      };
    }

    return this._schema;
  }
}

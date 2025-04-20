/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Operations } from './Operations';
import { OperationsRequestBuilder } from './OperationsRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { PayAgreementLinesApi } from './PayAgreementLinesApi';
import { RouteOperationsApi } from './RouteOperationsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OperationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Operations<DeSerializersT>, DeSerializersT>
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
  ): OperationsApi<DeSerializersT> {
    return new OperationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT_LINES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      PayAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATIONS: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      RouteOperationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      PayAgreementLinesApi<DeSerializersT>,
      RouteOperationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[1]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[2]
      ),
      PAY_AGREEMENT_LINES: new OneToManyLink(
        'PayAgreementLines',
        this,
        linkedApis[3]
      ),
      ROUTE_OPERATIONS: new OneToManyLink(
        'RouteOperations',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = Operations;

  requestBuilder(): OperationsRequestBuilder<DeSerializersT> {
    return new OperationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Operations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Operations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Operations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Operations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Operations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Operations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      Operations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_NAME: OrderableEdmTypeField<
      Operations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT_LINES: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      PayAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATIONS: OneToManyLink<
      Operations<DeSerializersT>,
      DeSerializersT,
      RouteOperationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Operations<DeSerializers>>;
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
         * Static representation of the {@link operationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'OperationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NAME: fieldBuilder.buildEdmTypeField(
          'OperationName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Operations)
      };
    }

    return this._schema;
  }
}

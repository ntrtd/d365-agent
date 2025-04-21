/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReturnDispositionCodes } from './ReturnDispositionCodes';
import { ReturnDispositionCodesRequestBuilder } from './ReturnDispositionCodesRequestBuilder';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { DispositionAction } from './DispositionAction';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ReturnDispositionCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReturnDispositionCodes<DeSerializersT>, DeSerializersT>
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
  ): ReturnDispositionCodesApi<DeSerializersT> {
    return new ReturnDispositionCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ReturnDispositionCodes<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      ReturnDispositionCodes<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[0]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ReturnDispositionCodes;

  requestBuilder(): ReturnDispositionCodesRequestBuilder<DeSerializersT> {
    return new ReturnDispositionCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReturnDispositionCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReturnDispositionCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReturnDispositionCodes<DeSerializersT>,
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
    typeof ReturnDispositionCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReturnDispositionCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReturnDispositionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPOSITION_CODE: OrderableEdmTypeField<
      ReturnDispositionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPOSITION_DESCRIPTION: OrderableEdmTypeField<
      ReturnDispositionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSITION_ACTION: EnumField<
      ReturnDispositionCodes<DeSerializers>,
      DeSerializersT,
      DispositionAction,
      true,
      true
    >;
    KITTING_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      ReturnDispositionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ReturnDispositionCodes<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      ReturnDispositionCodes<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReturnDispositionCodes<DeSerializers>>;
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
         * Static representation of the {@link dispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'DispositionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dispositionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSITION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DispositionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dispositionAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSITION_ACTION: fieldBuilder.buildEnumField(
          'DispositionAction',
          DispositionAction,
          true
        ),
        /**
         * Static representation of the {@link kittingDispositionCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KITTING_DISPOSITION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'KittingDispositionCodeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReturnDispositionCodes)
      };
    }

    return this._schema;
  }
}

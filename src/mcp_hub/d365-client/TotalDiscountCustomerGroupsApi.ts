/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalDiscountCustomerGroups } from './TotalDiscountCustomerGroups';
import { TotalDiscountCustomerGroupsRequestBuilder } from './TotalDiscountCustomerGroupsRequestBuilder';
import { OpenSalesTotalDiscountJournalLinesApi } from './OpenSalesTotalDiscountJournalLinesApi';
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
export class TotalDiscountCustomerGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalDiscountCustomerGroups<DeSerializersT>, DeSerializersT>
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
  ): TotalDiscountCustomerGroupsApi<DeSerializersT> {
    return new TotalDiscountCustomerGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openSalesTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      TotalDiscountCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesTotalDiscountJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TotalDiscountCustomerGroups;

  requestBuilder(): TotalDiscountCustomerGroupsRequestBuilder<DeSerializersT> {
    return new TotalDiscountCustomerGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TotalDiscountCustomerGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalDiscountCustomerGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalDiscountCustomerGroups<DeSerializersT>,
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
    typeof TotalDiscountCustomerGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalDiscountCustomerGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TotalDiscountCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      TotalDiscountCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      TotalDiscountCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      TotalDiscountCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalDiscountCustomerGroups<DeSerializers>>;
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
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TotalDiscountCustomerGroups)
      };
    }

    return this._schema;
  }
}

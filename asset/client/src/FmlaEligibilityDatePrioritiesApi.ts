/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FmlaEligibilityDatePriorities } from './FmlaEligibilityDatePriorities';
import { FmlaEligibilityDatePrioritiesRequestBuilder } from './FmlaEligibilityDatePrioritiesRequestBuilder';
import { HcmFmlaPriorityCategory } from './HcmFmlaPriorityCategory';
import { HcmFmlaEligibilityPriorityDateType } from './HcmFmlaEligibilityPriorityDateType';
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
export class FmlaEligibilityDatePrioritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FmlaEligibilityDatePriorities<DeSerializersT>, DeSerializersT>
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
  ): FmlaEligibilityDatePrioritiesApi<DeSerializersT> {
    return new FmlaEligibilityDatePrioritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FmlaEligibilityDatePriorities;

  requestBuilder(): FmlaEligibilityDatePrioritiesRequestBuilder<DeSerializersT> {
    return new FmlaEligibilityDatePrioritiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FmlaEligibilityDatePriorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FmlaEligibilityDatePriorities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FmlaEligibilityDatePriorities<DeSerializersT>,
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
    typeof FmlaEligibilityDatePriorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FmlaEligibilityDatePriorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FmlaEligibilityDatePriorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      FmlaEligibilityDatePriorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIORITY_CATEGORY: EnumField<
      FmlaEligibilityDatePriorities<DeSerializers>,
      DeSerializersT,
      HcmFmlaPriorityCategory,
      true,
      true
    >;
    PRIORITY_DATE_TYPE: EnumField<
      FmlaEligibilityDatePriorities<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FmlaEligibilityDatePriorities<DeSerializers>>;
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priorityCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY_CATEGORY: fieldBuilder.buildEnumField(
          'PriorityCategory',
          HcmFmlaPriorityCategory,
          true
        ),
        /**
         * Static representation of the {@link priorityDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY_DATE_TYPE: fieldBuilder.buildEnumField(
          'PriorityDateType',
          HcmFmlaEligibilityPriorityDateType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FmlaEligibilityDatePriorities)
      };
    }

    return this._schema;
  }
}

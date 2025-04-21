/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoyaltyOtherActivityTypes } from './LoyaltyOtherActivityTypes';
import { LoyaltyOtherActivityTypesRequestBuilder } from './LoyaltyOtherActivityTypesRequestBuilder';
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
export class LoyaltyOtherActivityTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LoyaltyOtherActivityTypes<DeSerializersT>, DeSerializersT>
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
  ): LoyaltyOtherActivityTypesApi<DeSerializersT> {
    return new LoyaltyOtherActivityTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LoyaltyOtherActivityTypes;

  requestBuilder(): LoyaltyOtherActivityTypesRequestBuilder<DeSerializersT> {
    return new LoyaltyOtherActivityTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoyaltyOtherActivityTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LoyaltyOtherActivityTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LoyaltyOtherActivityTypes<DeSerializersT>,
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
    typeof LoyaltyOtherActivityTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoyaltyOtherActivityTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_OTHER_ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      LoyaltyOtherActivityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_DESCRIPTION: OrderableEdmTypeField<
      LoyaltyOtherActivityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_NAME: OrderableEdmTypeField<
      LoyaltyOtherActivityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IGNORE_VESTING_PERIOD: EnumField<
      LoyaltyOtherActivityTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LoyaltyOtherActivityTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ignoreVestingPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_VESTING_PERIOD: fieldBuilder.buildEnumField(
          'IgnoreVestingPeriod',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoyaltyOtherActivityTypes)
      };
    }

    return this._schema;
  }
}
